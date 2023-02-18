/**
 * This will modulerize all of the components and export as a single package, reducing number of direct imports in the pages
 */
import NavigationBar from "./common/navigation-bar";
import NewsTile from "./home-page/newstile.component";
import HeadlineTile from "./home-page/headline.component";
import BannerTile from "./home-page/banner.component";
import AdminDashboardTable from "./admin-dashboard/admintable.component";
import CreateNews from "./admin-dashboard/createnews.component";
import NewsForm from "./news-submission/new-news-form.component";
import FooterBar from "./common/footer.component";
import ShowNews from "./news-page/shownews.component";
import HotNewsTile  from "./news-page/hotnewstiles.component";
import NewsCard  from "./news-page/newscard.component";
import UpdateNews  from "./news-submission/update-news.component";

export  {
    NavigationBar,
    NewsTile,
    HeadlineTile,
    BannerTile,
    AdminDashboardTable,
    CreateNews,
    NewsForm,
    FooterBar,
    ShowNews,
    HotNewsTile,
    NewsCard,
    UpdateNews,
}