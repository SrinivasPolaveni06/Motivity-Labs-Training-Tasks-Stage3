import React, { useState, useEffect } from "react";

const imageMimeType = /image\/(png|jpg|jpeg)/i;

const Index = () => {
  const [file, setFile] = useState(null);
  const [fileDataURL, setFileDataURL] = useState([]);

  const changeHandler = (e) => {
    const file = e.target.files[0];
    if (!file.type.match(imageMimeType)) {
      alert("Image mime type is not valid");
      return;
    }
    setFile(file);
  };
  useEffect(() => {
    let fileReader,
      isCancel = false;
    if (file) {
      fileReader = new FileReader();
      fileReader.onload = (e) => {
        const { result } = e.target;
        if (result && !isCancel) {
          setFileDataURL((prevState) => [...prevState, result]);
        }
      };
      fileReader.readAsDataURL(file);
    }
    return () => {
      isCancel = true;
      if (fileReader && fileReader.readyState === 1) {
        fileReader.abort();
      }
    };
  }, [file]);

  //   if (file) {
  //     console.log(file);
  //     console.log(file[0].name);
  //   }

  //console.log(fileDataURL);

  return (
    <div>
      <form>
        <p>
          <label htmlFor="file">Upload images</label>
          <input
            type="file"
            id="file"
            onChange={changeHandler}
            //accept="image/*"
            accept=".png, .jpg, .jpeg"
            multiple
          />
        </p>
      </form>
      <div>
        {fileDataURL.map((eachFile) =>
          file ? (
            <img key={eachFile} src={eachFile} alt="Display " width="500" />
          ) : null
        )}
      </div>
    </div>
  );
};

export default Index;
