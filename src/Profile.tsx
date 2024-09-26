interface ProfileProps {
  name: string;
  imgUrl: string;
}

export function Profile({ name = "", imgUrl = "" }: ProfileProps) {
  return (
    <>
      <h1>{name}</h1>
      <img src={imgUrl}></img>
    </>
  );
}
