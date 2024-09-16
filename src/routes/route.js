const PostsRoutes =  {
    default: ()=>"default",
    layout: ()=>"layout",
    games:()=>"games",
    sidelinks:{
        home: ()=>"home",
        team: ()=>"team",
        projects: ()=>"projects",
        calendar: ()=>"calendar",
        documents: ()=>"documents",
        reports:()=>"reports",
        settings: ()=>"settings"
    },
    form:{
        auth: ()=>"auth",
        signin: ()=>"auth/signin",
        signup: ()=>"auth/signup",
        forgot: ()=>"forgot"

    },
    
    game:{
        guessthehex: ()=>"guessthehex"
    }

   
     
}
export default PostsRoutes