import React, { useState, useEffect, useRef } from "react";
import AvatarEditor from "react-avatar-editor";
import styled from "styled-components";
import { theme } from "theme";

function EditProfile() {
  const imgInputRef = useRef(null);
  const [selectedImgFile, setSelectedImgFile] = useState(null);

  const handleChange = () => {
    console.log("onChanged");
    console.log(imgInputRef.current.files[0]);
    setSelectedImgFile(imgInputRef.current.files[0]);
  };

  return (
    <ProfileWrapper>
      <form>
        <h3>이미지를 선택해주세요</h3>
        <input
          type="file"
          accept=".jpg,.png"
          ref={imgInputRef}
          onChange={handleChange}
        />
        <button>Submit</button>
      </form>
      <AvatarEditor
        className="profile-editor"
        width={300}
        height={300}
        borderRadius={300 / 2}
        image={selectedImgFile}
      />
    </ProfileWrapper>
  );
}

export default EditProfile;

const ProfileWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 500px;
  height: 600px;
  background-color: ${theme.beige};
  margin: 10vh auto;
`;
