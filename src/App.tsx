import {Routes, Route} from 'react-router-dom';
import './globals.css'
import { AllUsers, CreatePost, EditPost, Explore, Home,
 PostDetails, Profile, Saved, UpdateProfile } from './_root/Pages';
import SigninForm from './_auth/forms/SigninForm';
import SignupForm from './_auth/forms/SignupForm';
import AuthLayout from './_auth/AuthLayout';
import RootLAyout from './_root/RootLAyout';
import { Toaster } from "@/components/ui/toaster"


const App = () => {
  return (
  <main className = "flex h-screen">
    <Routes>
    {/* public routes */}
        <Route element = {<AuthLayout />}>
            <Route path = "/sign-in" element={<SigninForm />}/>
            <Route path = "/sign-up" element={<SignupForm />}/>
        </Route>

    {/* private routes */}
            <Route element  ={<RootLAyout />} >
                <Route index element = {<Home />} />
                <Route   path="/explore" element={<Explore/>}/>
                <Route   path="/saved" element={<Saved/>}/>
                <Route   path="/all-users" element={<AllUsers/>}/>
                <Route   path="/create-post" element={<CreatePost/>}/>
                <Route   path="/update-post/:id" element={<EditPost/>}/>
                <Route   path="/posts/:id" element={<PostDetails/>}/>
                <Route   path="/profile/:id/*" element={<Profile/>}/>
                <Route   path="/update-profile/:id" element={<UpdateProfile/>}/>
            </Route>
        </Routes>
        <Toaster />
  </main>
  )
}

export default App