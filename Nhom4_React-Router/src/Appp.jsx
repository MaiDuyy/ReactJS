import React, { useState, useEffect, useRef, useMemo, useReducer } from 'react';

const studentReducer = (state, action) => {
  switch (action.type) {
    case 'ADD':
      return [...state, action.payload];
    case 'EDIT_SCORE':
      return state.map((student) =>
        student.id === action.payload.id
          ? { ...student, scores: { ...student.scores, ...action.payload.updatedScores } }
          : student
      );
    case 'EDIT_NAME':
      return state.map((student) =>
        student.id === action.payload.id ? { ...student, name: action.payload.name } : student
      );
    case 'DELETE':
      return state.filter((student) => student.id !== action.payload);
    case 'SET':
      return action.payload;
    default:
      return state;
  }
};

function App() {
  const [students, dispatch] = useReducer(studentReducer, []);
  const [name, setName] = useState('');
  const [editId, setEditId] = useState(null);
  const [editingScore, setEditingScore] = useState(null); 
  const nameInputRef = useRef();


  useEffect(() => {
    const storedStudents = JSON.parse(localStorage.getItem('students'));
    if (storedStudents) {
      dispatch({ type: 'SET', payload: storedStudents });
     
    }
    console.log(storedStudents);
  }, []);


  useEffect(() => {
    localStorage.setItem('students', JSON.stringify(students));
  }, [students]);


  const { studentAverages, overallAverage } = useMemo(() => {
    const studentAverages = students.map((student) => {
      const scores = Object.values(student.scores).filter((score) => score !== null);
      const total = scores.reduce((sum, score) => sum + score, 0);
      const average = scores.length > 0 ? (total / scores.length).toFixed(2) : 0;
      return { ...student, average };
    });

    const overallTotal = studentAverages.reduce((sum, student) => sum + parseFloat(student.average), 0);
    const overallAverage = students.length > 0 ? (overallTotal / students.length).toFixed(2) : 0;

    return { studentAverages, overallAverage };
  }, [students]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name) return;

    if (editId) {

      dispatch({ type: 'EDIT_NAME', payload: { id: editId, name } });
      setEditId(null);
    } else {
     
      const newStudent = {
        id: Date.now(),
        name,
        scores: { score1: null, score2: null, score3: null }, 
      };
      dispatch({ type: 'ADD', payload: newStudent });
    }

    setName('');
    nameInputRef.current.focus();
  };


  const handleEditScore = (id, field, value) => {
    const scoreValue = value !== '' ? parseFloat(value) : null;

    if (scoreValue !== null && (scoreValue < 0 || scoreValue >= 11)) {
      alert('Điểm phải nằm trong khoảng từ 0 đến dưới 10!');
      return;
    }
    dispatch({
      type: 'EDIT_SCORE',
      payload: { id, updatedScores: { [field]: scoreValue } },
    });
  };


  const handleDelete = (id) => {
    dispatch({ type: 'DELETE', payload: id });
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Quản lý sinh viên</h1>


      <form onSubmit={handleSubmit} className="mb-4">
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          ref={nameInputRef}
          placeholder="Tên sinh viên"
          className="border p-2 mr-2"
          required
        />
        <button type="submit" className="bg-blue-500 text-white p-2">
          {editId ? 'Sửa tên' : 'Thêm sinh viên'}
        </button>
      </form>

  
      <div>
        <h2 className="text-xl font-semibold mb-2">Danh sách sinh viên</h2>
        <table className="w-full border-collapse border">
          <thead>
            <tr className="bg-gray-200">
              <th className="border p-2">Tên sinh viên</th>
              <th className="border p-2">Điểm 1</th>
              <th className="border p-2">Điểm 2</th>
              <th className="border p-2">Điểm 3</th>
              <th className="border p-2">Điểm trung bình</th>
              <th className="border p-2">Hành động</th>
            </tr>
          </thead>
          <tbody>
            {studentAverages.map((student) => (
              <tr key={student.id} className="border">
                <td className="border p-2">{student.name}</td>
                {['score1', 'score2', 'score3'].map((field) => (
                  <td key={field} className="border p-2">
                    {editingScore?.id === student.id && editingScore.field === field ? (
                      <input
                        type="number"
                        defaultValue={student.scores[field] || ''}
                        onBlur={(e) => {
                          handleEditScore(student.id, field, e.target.value);
                          setEditingScore(null);
                        }}
                        className="w-16 border p-1"
                        min="0"
                        max="10"
                        step="1"
                        autoFocus
                      />
                    ) : (
                      <span
                        onClick={() => setEditingScore({ id: student.id, field })}
                        className="cursor-pointer"
                      >
                        {student.scores[field] ?? 'Nhập điểm'}
                      </span>
                    )}
                  </td>
                ))}
                <td className="border p-2">{student.average}</td>
                <td className="border p-2">
                  <button
                    onClick={() => {
                      setName(student.name);
                      setEditId(student.id);
                      nameInputRef.current.focus();
                    }}
                    className="bg-yellow-500 text-white p-1 mr-2"
                  >
                    Sửa tên
                  </button>
                  <button
                    onClick={() => handleDelete(student.id)}
                    className="bg-red-500 text-white p-1"

                    
                  >
                    Xoá
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

   
      <div className="mt-4">
        <h2 className="text-xl font-semibold">Điểm trung bình chung: {overallAverage}</h2>
      </div>
    </div>
  );
}

export default App;