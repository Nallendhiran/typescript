

type loginuservalue={username:string,password:string|number};
type signvalue={phonenumber:number,name:string};

let login=(user:loginuservalue)=>{
    return "success";
    console.log(`hi ${user.username}`);
};

let signin=(userdetails:signvalue)=>{
    return true;
}

login({username:"karthi",password:""});

