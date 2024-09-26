import "./App.css";

interface ProfileProps {
  name: string;
  img: Img;
  children: React.ReactNode;
}

interface Img {
  src: string;
  alt: string;
  width: number;
  height: number;
}

interface ListProps {
  title: string;
  content: string;
  number?: number;
}

function List({ title = "", content = "", number }: ListProps) {
  return (
    <>
      <li>
        <b>
          {title}: {number}
        </b>
        {content}
      </li>
    </>
  );
}

function getImageUrl(imageId = "") {
  return "https://i.imgur.com/" + imageId + ".jpeg";
}

function Profile({
  name = "",
  img = { src: "", width: 0, height: 0, alt: "img" },
  children,
}: ProfileProps) {
  return (
    <>
      <section className="profile">
        <h2>{name}</h2>
        <img className="avatar" {...img} />
        <ul>{children}</ul>
      </section>
    </>
  );
}

function App() {
  // const todos = ["Sit", "Walk", "Run"];
  // const [count, setCount] = useState(0);
  const scientistList = [
    {
      name: "Maria Skłodowska-Curie",
      img: {
        src: getImageUrl("GleAY3f"),
        alt: "Maria Skłodowska-Curie",
        width: 70,
        height: 70,
      },
      lists: [
        { title: "Profession", content: "physicist and chemist" },
        {
          title: "Awards",
          content:
            "(Nobel Prize in Physics, Nobel Prize in Chemistry, Davy Medal, Matteucci Medal)",
          number: 4,
        },
        { title: "Discovered", content: "polonium (chemical element)" },
      ],
    },
    {
      name: "Katsuko Saruhashi",
      img: {
        src: getImageUrl("JT7SP0M"),
        alt: "Katsuko Saruhashi",
        width: 70,
        height: 70,
      },
      lists: [
        { title: "Profession", content: "geochemist" },
        {
          title: "Awards",
          content: "(Miyake Prize for geochemistry, Tanaka Prize)",
          number: 2,
        },
        {
          title: "Discovered",
          content: "a method for measuring carbon dioxide in seawater",
        },
      ],
    },
  ];

  return (
    <>
      <div>
        <h1>Notable Scientists</h1>
        {scientistList.map((scientist, i) => (
          <Profile key={i} name={scientist.name as string} img={scientist.img}>
            {scientist.lists?.map((list, index) => (
              <List
                key={index}
                title={list.title}
                content={list.content}
                number={list.number}
              />
            ))}
          </Profile>
        ))}
      </div>
    </>
  );
}

export default App;
