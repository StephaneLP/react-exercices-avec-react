import ArticlesListe from "./ArticlesList";
import HighLightArticle from "./HighLightArticle";

const articles = [
    {
      title: "React Hooks",
      content: "React Hooks are awesome!",
    },
    {
      title: "React Context",
      content: "React Context is awesome!",
    },
    {
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
