import "./HeroManagement.scss";
import { useState } from "react";
import api from "../../../services/api";
import AdminLayout from "../../../layouts/AdminLayout";
import {
  Image,
  Save,
  Eye
} from "lucide-react";

const HeroManagement = () => {

  const [selectedFile,setSelectedFile] =useState<File | null>(null);

  const [hero, setHero] =
    useState({
      title: "",
      subtitle: "",
      description: "",
      imageUrl: ""
    });

  const saveHero = async () => {

    try {

      await api.put(
        "/Hero/1",
        hero
      );

      alert(
        "Hero Updated Successfully"
      );

    } catch {

      alert(
        "Failed To Update Hero"
      );

    }
  };

  return (

    <AdminLayout>

      <div className="hero-management">

        <div className="hero-header">

          <div>

            <h1>
              Hero Banner Management
            </h1>

            <p>
              Manage Homepage Banner & Campaigns
            </p>

          </div>

          <button
            className="save-btn"
            onClick={saveHero}
          >
            <Save size={18} />
            Save Changes
          </button>

        </div>

        <div className="hero-stats">

          <div className="stat-card">
            <Image size={30} />
            <h3>1</h3>
            <p>Active Banner</p>
          </div>

          <div className="stat-card">
            <Eye size={30} />
            <h3>Homepage</h3>
            <p>Display Location</p>
          </div>

        </div>

        <div className="hero-content">

          <div className="hero-form">

            <h2>
              Banner Information
            </h2>

            <input
              placeholder="Banner Title"
              value={hero.title}
              onChange={(e) =>
                setHero({
                  ...hero,
                  title: e.target.value
                })
              }
            />

            <input
              placeholder="Banner Subtitle"
              value={hero.subtitle}
              onChange={(e) =>
                setHero({
                  ...hero,
                  subtitle: e.target.value
                })
              }
            />

            <textarea
              placeholder="Banner Description"
              rows={5}
              value={hero.description}
              onChange={(e) =>
                setHero({
                  ...hero,
                  description: e.target.value
                })
              }
            />

            {/* <input
              placeholder="Banner Image URL"
              value={hero.imageUrl}
              onChange={(e) =>
                setHero({
                  ...hero,
                  imageUrl: e.target.value
                })
              }
            />*/}

            <div className="upload-section">

              <label>
                Upload Banner Image
              </label>

              <input
                type="file"
                accept="image/*"
                onChange={(e)=>
                  setSelectedFile(
                    e.target.files?.[0] || null
                  )
                }
              />

            </div>

          </div>

          <div className="hero-preview">

            <h2>
              Live Preview
            </h2>

            <div
              className="preview-card"
              style={{
                backgroundImage:
                  hero.imageUrl
                    ? `url(${hero.imageUrl})`
                    : "none"
              }}
            >

              <div className="overlay">

                <span>
                  {hero.subtitle ||
                    "NEW COLLECTION"}
                </span>

                <h2>
                  {hero.title ||
                    "Silk & Shine"}
                </h2>

                <p>
                  {hero.description ||
                    "Premium Sarees & Jewellery"}
                </p>

              </div>

            </div>

          </div>

        </div>

      </div>

    </AdminLayout>

  );
};

export default HeroManagement;