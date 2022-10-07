import axios from 'axios'

// const base_url = "http://localhost:5001"
const base_url = "https://api-examino.herokuapp.com"



async function getUser(email) {
    const url = base_url + "/auth/get"
    if(!email) return {err:"email cannot be empty"}

    const res = await axios({
        method: 'put',
        url: url,
        data: {email}
    });

    return res.data
}

async function updateUserType(uid, type){
    const url = base_url+"/auth/update"

    if (!uid || !type) return { err: "Enter user and type Data" }

    return await axios({
        method: 'post',
        url: url,
        data: {data: [uid, type]}
    })
}

async function createUser(user) {
    const url = base_url + "/auth/register"

    if (!user) return { err: "Enter user and type Data" }

    return await axios({
        method: 'post',
        url: url,
        data: {user}
    })
}

async function getTest(title){
    const url = base_url+"/test/exam"

    if(!title) return {err: 'enter test title'}

    return await axios({
        method:'put',
        url:url,
        data:{title}
    })
    
}

async function getExams(){
    const url = base_url+"/test/exam/all"
    return await axios({
        method:'get',
        url:url
    })
}

async function createExam(exam){
    const url = base_url+"/test/create";
    if(!exam) return {err:"cannot upload empty exam"}
    
    return await axios({
        method:"post",
        url:url,
        data:{exam}
    })
}

async function submitTest(test){
    const url = base_url+"/test/submit";

    if(!test) return {err:"cannot submit empty test"}

    return await axios({
        method:"post",
        url:url,
        data:{test}
    })
}

export default { getUser, createUser , getTest , createExam, submitTest, updateUserType ,getExams};