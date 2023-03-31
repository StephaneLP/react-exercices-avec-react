import ArticlesListe from "./ArticlesList";
import HighLightArticle from "./HighLightArticle";

const articles = [
    {
        id: 1,
      title: "React Hooks",
      content: "React Hooks are awesome!",
    },
    {
        id: 2,
      title: "React Context",
      content: "React Context is awesome!",
    },
    {
        id: 3,
      title: "React Router",
      content: "React Router is awesome!",
    },
]

function App() {
  return (
    <div>
        <ArticlesListe articles={articles}/>
        <HighLightArticle articles={articles[0]}/>
    </div>
  );
}

export default App;
