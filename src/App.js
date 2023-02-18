import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import CreateNews from './pages/CreateNews';
import EditNews from './pages/EditNews';
import { SignInPage, SignUpPage, AdminDashboard, HomePage, ViewNews } from './pages/index.page'

function App() {
  return (
    <Router>
      <div className='w-8/12 mx-auto App'>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/admindashboard" element={<AdminDashboard />} />
          <Route path="/viewnews/:newsId" element={<ViewNews />} />
          <Route path="/signin" element={<SignInPage />} />
          <Route path="/signup" element={<SignUpPage />} />
          <Route path='/create-news' element={<CreateNews />}/>
          <Route path='/edit-news/:newsId' element={<EditNews />}/>
          <Route path="/shownews" element={<ViewNews />} />
        </Routes>
      </div>
    </Router>
  );
}
export default App