import React from "react";

export default function BasicInfo({ data }) {
  console.log(data);

  return (
    <>
      <section id="center">
        <h1>Result</h1>
        <span>your name:</span>
        {Object.values(data).map((value, index,arr) => (
          <>
            {/* <p key={index}>{value}</p> */}
            <h2>{arr.join(" ")}</h2>
          </>
        ))}
      </section>
    </>
  );
}
