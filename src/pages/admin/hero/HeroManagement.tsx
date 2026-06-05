import "./HeroManagement.scss";
import { useState } from "react";
import api from "../../../services/api";

const HeroManagement = () => {

  const [hero,setHero] =
  useState({
    title:"",
    subtitle:"",
    description:"",
    imageUrl:""
  });

  const saveHero =
  async() =>
  {
    await api.put(
      "/Hero/1",
      hero
    );

    alert(
      "Hero Updated"
    );
  };

  return (
    <div className="admin-page">

      <h1>
        Hero Management
      </h1>

      <input
        placeholder="Title"
        onChange={(e)=>
        setHero({
          ...hero,
          title:e.target.value
        })}
      />

      <input
        placeholder="Subtitle"
        onChange={(e)=>
        setHero({
          ...hero,
          subtitle:e.target.value
        })}
      />

      <textarea
        placeholder="Description"
        onChange={(e)=>
        setHero({
          ...hero,
          description:e.target.value
        })}
      />

      <input
        placeholder="Banner URL"
        onChange={(e)=>
        setHero({
          ...hero,
          imageUrl:e.target.value
        })}
      />

      <button
        onClick={saveHero}
      >
        Save Hero
      </button>

    </div>
  );
};

export default HeroManagement;