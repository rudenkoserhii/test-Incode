import React from "react";
import { repoValue } from "../../redux/repo/selectors";
import { useSelector } from "react-redux";

export const Title = () => {
  const url = useSelector(repoValue);

  return (
    url && (
      <h1 style={{ margin: '0px', fontSize: '26px', color: 'blue' }} >
        <a
          href={url
            .split("/")
            .splice(0, url.split("/").length - 1)
            .join("/")}
          target="blank"
        >
          <span>
            {url
              .split("github.com/")[1]
              .split("/")[0]
              .split("")
              .map((item, index) => (index === 0 ? item.toUpperCase() : item))
              .join("")}
          </span>
        </a>
        {" > "}
        <a href={url} target="blank">
          <span>
            {url
              .split("github.com/")[1]
              .split("/")[1]
              .split("")
              .map((item, index) => (index === 0 ? item.toUpperCase() : item))
              .join("")}
          </span>
        </a>
      </h1>
    )
  );
};
