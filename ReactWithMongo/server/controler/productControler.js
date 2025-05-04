import Product from "../model/productModel.js"



export const create = async (req, res) => {
    try {
        const newProduct = new Product(req.body);
        const {name}  = newProduct;

        const productExist = await Product.findOne({name})

        if(productExist) {
            return res.status(400).json({message : "Product already exitss"});
        }
        
        const savedData = await newProduct.save();
        res.status(200).json(savedData);
    } catch {
        res.status(500).json({ errMessage: error.message });

    }


};

export const getALLUsers = async (req, res) =>{
    try {
      const  productData  = await Product.find();
      if(!productData || productData.length===0){
            return res.status(400).json({message : "Product not found"})
      }
      res.status(200).json(productData);
    } catch {
        res.status(500).json({ errMessage: error.message });

    }
};


export const getProductByID =  async(req, res) => {


    try{
        const id = req.params.id ;
        const productExitst = await Product.findById(id);
        if(!productExitst){
            return res.status(400).json({message : "Product already exitss"});
        }

        res.status(200).json(productExitst);
    }catch{
        res.status(500).json({ errMessage: error.message });
    }
};

export const update = async (req , res ) =>{ 
    try {
        const id = req.params.id ;
        const productExitst = await Product.findById(id);
        if(!productExitst){
            return res.status(400).json({message : "Product already exitss"});
        }

      const upadtaData =   await Product.findByIdAndUpdate(id , req.body , {
            new : true
        })
        res.status(200).json(upadtaData)
    } catch  {
        res.status(500).json({ errMessage: error.message });
    }
};


export const deleteProduct = async (req, res) => {
    try {
        const id = req.params.id ;
        const productExitst = await Product.findById(id);
        if(!productExitst){
            return res.status(400).json({message : "Product already exitss"});
        }
        await Product.findByIdAndDelete(id); 
        res.status(200).json({message : "User delete susscessfully"});
    } catch (error) {
        
    }
}