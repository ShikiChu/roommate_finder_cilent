import { useMemo, useRef, useState } from "react";


const ImageUpload = ({ getInputFiles }) => {
    console.log(`**** in ImageUpload component *********`);
    const [inputFiles, setInputFiles] = useState([]);
    const inputRef = useRef(null);
    console.log(`inputFiles.length = ${inputFiles.length}!`);

    const selectedFileArray = useMemo(() => {
      return inputFiles ? [...Array.from(inputFiles)] : [];
    }, [inputFiles]);
    console.log(`selectedFileArray.length = ${selectedFileArray.length}!`);

    const handleChange = (e) => {
      if (!e.target.files) return;
      setInputFiles(e.target.files ? [...Array.from(e.target.files)] : [] );
      if (!inputRef.current?.files) return;
      const newFileArray = [
        ...selectedFileArray,
        ...Array.from(e.target.files),
      ].filter(
        (file, index, self) =>
          self.findIndex((f) => f.name === file.name) === index // delete duplication
      );
      const dt = new DataTransfer();
      newFileArray.forEach((file) => dt.items.add(file));
      inputRef.current.files = dt.files; // update the FileList in the input
      setInputFiles(dt.files); // update state
      console.log(`inputFiles.length = ${inputFiles.length}!`);

    };

    const handleDelete = (index) => {
      if (!inputRef.current?.files) return;
      const dt = new DataTransfer();
      selectedFileArray.forEach((file, i) => i !== index && dt.items.add(file));
      inputRef.current.files = dt.files; // update the FileList in the input
      setInputFiles(dt.files); // update state
    };

    const selectedFileArrayMap = (arr) => {
      console.log(`arr = ${arr}!`);
      getInputFiles(arr);
      
      return arr.map((file, index) => (
        <div
          key={file.name}
          className="flex items-center justify-between gap-2"
        >
          <div>{file.name}</div>
          <button onClick={() => handleDelete(index)}>削除</button>
        </div>
        
      ))

    }

    return (
      <>
        <p>ImageUpload</p>
         <input type="file" multiple onChange={handleChange} ref={inputRef} />
        <div className="w-fit space-y-3">
           {selectedFileArray && selectedFileArrayMap(selectedFileArray)}
        </div>
      </>
      
      
    );
    
  };


export default ImageUpload;