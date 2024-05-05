export default async function page() {
  async function handleOnClick() {
    "use server";
    console.log("onClick called!");
    await new Promise((res) => setTimeout(res, 1000));
    console.log("onClick finished!");
  }

  return <button onClick={handleOnClick}>Page 1</button>;
}



