import React from "react";
import "./GoogleDocsClone.css";
import { useRef, useState } from "react";
import { MdExposurePlus2, MdExposureNeg2 } from "react-icons/md";
const GoogleDocsClone = () => {
  const [contentWrittenOnText, setContentWrittenOnText] = useState("");
  console.log(contentWrittenOnText);
  const editorRef = useRef(null);
  const [fontSize, setFontSize] = useState("10");
  const [selectedColor, setSelectedColor] = useState("#000000");
  const dec = () => {
    editorRef.current.focus();
    const newFontSize = parseInt(fontSize) - 2;
    document.execCommand("fontSize", false, newFontSize + "px");
    setFontSize(newFontSize);
  };

  const inc = () => {
    editorRef.current.focus();
    const newFontSize = parseInt(fontSize) + 2;
    document.execCommand("fontSize", false, newFontSize + "px");
    setFontSize(newFontSize);
  };

  const handleInputChange = (event) => {
    const newContent = event.target.value;
    setContentWrittenOnText(newContent);
  };

  const handleBold = () => {
    editorRef.current.focus();
    document.execCommand("bold", false, null);
  };
  const handleUnderLine = () => {
    editorRef.current.focus();
    document.execCommand("underline", false, null);
  };
  const handleItalic = () => {
    editorRef.current.focus();
    document.execCommand("italic", false, null);
  };

  const handleColorChange = (color) => {
    editorRef.current.focus();
    document.execCommand("foreColor", false, color);
    setSelectedColor(color);
  };

  const colorPalette = [
    "#000000",
    "#FF0000",
    "#00FF00",
    "#0000FF",
    "#FFFF00",
    "#FF00FF",
    "#00FFFF",
    "#FFFFFF",
  ];

  const handleRight = (e) => {
    editorRef.current.focus();
    document.execCommand("justifyRight", false, null);
  };

  const handleCenter = (e) => {
    editorRef.current.focus();
    document.execCommand("justifyCenter", false, null);
  };

  const handleLeft = (e) => {
    editorRef.current.focus();
    document.execCommand("justifyLeft", false, null);
  };
  const handleJustify = (e) => {
    editorRef.current.focus();
    document.execCommand("justifyLeft", false, null);
  };

  const handleDownload = () => {
    const element = document.createElement("a");
    const file = new Blob([contentWrittenOnText], { type: "text/plain" });
    element.href = URL.createObjectURL(file);
    element.download = "document.txt";
    element.click();
  };

  return (
    <>
      <div className="header">
        <div className="whiteBar">
          <a href="#">
            <img
              className="docsLogo"
              src="http://static1.squarespace.com/static/55dcfb03e4b07360409d0471/55e724bde4b0c296de94c811/55e724c0e4b0c296de94c833/1441211585166/bluedoclogo.png?"
              alt=""
            />
          </a>

          <h1 id="untitled">
            <em>Untitled document</em>
          </h1>

          <ul id="mainMenu">
            <li>File</li>
            <li>Edit</li>
            <li>View</li>
            <li>Insert</li>
            <li>Format</li>
            <li>Tools</li>
            <li>Table</li>
            <li>Add-Ons</li>
            <li>Help</li>
          </ul>

          <div className="rightSide">
            <ul className="extraButtons">
              <li onClick={handleDownload}>Download</li>
            </ul>
          </div>
        </div>

        <div className="toolBar">
          <div className="toolBag"></div>

          <a href="#">
            <img
              className="toolbarButtonsPrint"
              src="http://static1.squarespace.com/static/55dcfb03e4b07360409d0471/55e724bde4b0c296de94c811/55e724c0e4b076794acc425b/1441211584574/printer.png"
              alt=""
            />
          </a>
          <a href="#">
            <img
              className="toolbarButtons"
              src="http://static1.squarespace.com/static/55dcfb03e4b07360409d0471/55e724bde4b0c296de94c811/55e724c0e4b076794acc4259/1441211584347/back.png"
              alt=""
            />
          </a>
          <a href="#">
            <img
              className="toolbarButtons"
              src="http://static1.squarespace.com/static/55dcfb03e4b07360409d0471/55e724bde4b0c296de94c811/55e724c0e4b076bc359bf9f3/1441211584386/fwd.png"
              alt=""
            />
          </a>
          <a href="#">
            <img
              className="toolbarButtonsPaint"
              src="http://static1.squarespace.com/static/55dcfb03e4b07360409d0471/55e724bde4b0c296de94c811/55e724c0e4b076794acc4257/1441211584157/paint.png"
              alt=""
            />
          </a>

          <a href="#">
            <span className="toolbarButtons100">
              100%
              <img
                id="hunCaret"
                src="http://static1.squarespace.com/static/55dcfb03e4b07360409d0471/55e724bde4b0c296de94c811/55e724bde4b076794acc4218/1441211581744/caret.png?format=300w"
                alt=""
              />
            </span>
          </a>
          <a href="#">
            <span className="toolbarButtonsNormal">
              Normal Text
              <img
                id="normalCaret"
                src="http://static1.squarespace.com/static/55dcfb03e4b07360409d0471/55e724bde4b0c296de94c811/55e724bde4b076794acc4218/1441211581744/caret.png?format=300w"
                alt=""
              />
            </span>
          </a>
          <a href="#">
            <span className="toolbarButtonsArial">
              Open Sans
              <img
                id="openCaret"
                src="http://static1.squarespace.com/static/55dcfb03e4b07360409d0471/55e724bde4b0c296de94c811/55e724bde4b076794acc4218/1441211581744/caret.png?format=300w"
                alt=""
              />
            </span>
          </a>
          <a href="#">
            <a href="#">
              <span class="toolbarButtons11">
                <MdExposureNeg2 onClick={dec} />
                {"  "} {fontSize} {""}
                {""}
                <MdExposurePlus2 onClick={inc} />
              </span>
            </a>
          </a>
          <a href="#" onClick={handleBold}>
            <img
              className="toolbarButtonsB"
              src="http://static1.squarespace.com/static/55dcfb03e4b07360409d0471/55e724bde4b0c296de94c811/55e724bfe4b076794acc4251/1441211583548/bold.png?format=300w"
              alt=""
            />
          </a>
          <a href="#" onClick={handleItalic}>
            <img
              className="toolbarButtonsI"
              src="http://static1.squarespace.com/static/55dcfb03e4b07360409d0471/55e724bde4b0c296de94c811/55e724bfe4b076bc359bf9e6/1441211583336/i.png?format=300w"
              alt=""
            />
          </a>

          <a href="#" onClick={handleUnderLine}>
            <img
              className="toolbarButtonsU"
              src="http://static1.squarespace.com/static/55dcfb03e4b07360409d0471/55e724bde4b0c296de94c811/55e724bfe4b076bc359bf9ea/1441211583819/under.png?format=300w"
              alt=""
            />
          </a>

          <a href="#">
            <img
              className="toolbarButtonsColor"
              src="http://static1.squarespace.com/static/55dcfb03e4b07360409d0471/55e724bde4b0c296de94c811/55e724bfe4b076bc359bf9e8/1441211583603/color.png?format=300w"
              alt=""
            />
          </a>
          <a href="#">
            <img
              className="toolbarButtonsHyper"
              src="http://static1.squarespace.com/static/55dcfb03e4b07360409d0471/55e724bde4b0c296de94c811/55e724bfe4b076794acc4253/1441211583862/hyper.png?format=300w"
              alt=""
            />
          </a>
          <a href="#">
            <img
              className="toolbarButtonsMsg"
              src="http://static1.squarespace.com/static/55dcfb03e4b07360409d0471/55e724bde4b0c296de94c811/55e724bfe4b076794acc424f/1441211583411/msg.png?format=300w"
              alt=""
            />
          </a>
          <a href="#" onClick={handleLeft}>
            <img
              className="toolbarButtons"
              src="http://static1.squarespace.com/static/55dcfb03e4b07360409d0471/55e724bde4b0c296de94c811/55e724bfe4b076794acc4255/1441211584087/left.png?format=300w"
              alt=""
            />
          </a>
          <a href="#" onClick={handleCenter}>
            <img
              className="toolbarButtons"
              src="http://static1.squarespace.com/static/55dcfb03e4b07360409d0471/55e724bde4b0c296de94c811/55e724c0e4b076bc359bf9ef/1441211585710/center.png?format=300w"
              alt=""
            />
          </a>
          <a href="#" onClick={handleRight}>
            <img
              className="toolbarButtons"
              src="http://static1.squarespace.com/static/55dcfb03e4b07360409d0471/55e724bde4b0c296de94c811/55e724bfe4b076bc359bf9ed/1441211583977/right.png?format=300w"
              alt=""
            />
          </a>
          <a href="#" onClick={handleJustify}>
            <img
              className="toolbarButtonsJust"
              src="http://static1.squarespace.com/static/55dcfb03e4b07360409d0471/55e724bde4b0c296de94c811/55e724bfe4b076bc359bf9e4/1441211583110/just.png?format=300w"
              alt=""
            />
          </a>
          <a href="#">
            <img
              className="toolbarButtonsLine"
              src="http://static1.squarespace.com/static/55dcfb03e4b07360409d0471/55e724bde4b0c296de94c811/55e724bee4b076bc359bf9e0/1441211582962/line.png?format=300w"
              alt=""
            />
          </a>
          <a href="#">
            <img
              className="toolbarButtonsNumbered"
              src="http://static1.squarespace.com/static/55dcfb03e4b07360409d0471/55e724bde4b0c296de94c811/55e724bee4b076794acc4246/1441211582789/numbered.png?format=300w"
              alt=""
            />
          </a>
          <a href="#">
            <img
              className="toolbarButtonsBullet"
              src="http://static1.squarespace.com/static/55dcfb03e4b07360409d0471/55e724bde4b0c296de94c811/55e724bee4b076794acc424b/1441211582989/bullet.png?format=300w"
              alt=""
            />
          </a>
          <a href="#">
            <img
              className="toolbarButtonsIndentLeft"
              src="http://static1.squarespace.com/static/55dcfb03e4b07360409d0471/55e724bde4b0c296de94c811/55e724bee4b076794acc421f/1441211582304/indentright.png?format=300w"
              alt=""
            />
          </a>
          <a href="#">
            <img
              className="toolbarButtonsIndentRight"
              src="http://static1.squarespace.com/static/55dcfb03e4b07360409d0471/55e724bde4b0c296de94c811/55e724bee4b076794acc4221/1441211582457/indentleft.png?format=300w"
              alt=""
            />
          </a>

          <a href="#">
            <img
              className="toolbarButtonsClear"
              src="http://static1.squarespace.com/static/55dcfb03e4b07360409d0471/55e724bde4b0c296de94c811/55e724bee4b076794acc421d/1441211582124/clear.png?format=300w"
              alt=""
            />
          </a>
        </div>

        <div className="slider">
          <img src="" alt="" />
        </div>
      </div>
      <div
        className="page"
        contentEditable="true"
        ref={editorRef}
        onInput={handleInputChange}
      >
        {contentWrittenOnText}
      </div>
      <div className="colorPalette">
        {colorPalette.map((color) => (
          <div
            key={color}
            className={`colorOption ${
              selectedColor === color ? "selected" : ""
            }`}
            style={{ backgroundColor: color }}
            onClick={() => handleColorChange(color)}
          ></div>
        ))}
      </div>
    </>
  );
};

export default GoogleDocsClone;
