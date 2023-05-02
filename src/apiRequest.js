const apiRequest = async(url="",optionObjs =null,errMessage =null)=>{
    try{
        const response = await fetch(url,optionObjs);
        if(!response.ok){
            throw new Error('Please Leod the App');
        }
        const data = await response.json();
        return data;
    }catch(err){
        errMessage = err.message;
        return errMessage;
    } finally{
        return errMessage;
    }
}

export default apiRequest;