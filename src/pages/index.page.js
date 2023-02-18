/**
 * This will modulerize all of the pages and export as a single package, reducing number of direct imports in the App
 */
import SignInPage from "./SignInPage";
import SignUpPage from "./SignUpPage";
import AdminDashboard from "./AdminDashboard";
import ViewNews from "./ViewNews";
import HomePage from "./HomePage";

export {
    SignInPage,
    SignUpPage,
    AdminDashboard,
    ViewNews,
    HomePage,
}