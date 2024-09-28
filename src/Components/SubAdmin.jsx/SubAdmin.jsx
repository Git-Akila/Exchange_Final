import React, { useState, useEffect } from "react";
import PatternLock from "react-pattern-lock";

const SubAdmin = () => {
  const [path, setPath] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);
  const [success, setSuccess] = useState(false);
  const [disabled, setDisabled] = useState(false);
  const [size, setSize] = useState(3);
  let errorTimeout = null;

  useEffect(() => {
    const handleKeyDown = ({ which }) => {
      if (which === 38) {
        setSize(prevSize => (prevSize >= 10 ? 10 : prevSize + 1));
      } else if (which === 40) {
        setSize(prevSize => (prevSize > 3 ? prevSize - 1 : 3));
      }
    };
    
    window.addEventListener("keydown", handleKeyDown);
    
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      if (errorTimeout) {
        clearTimeout(errorTimeout);
      }
    };
  }, [errorTimeout]);

  const onReset = () => {
    setPath([]);
    setSuccess(false);
    setError(false);
    setDisabled(false);
  };

  const onChange = newPath => {
    setPath([...newPath]);
  };

  const onFinish = () => {
    setIsLoading(true);
    
    // Simulated API call
    setTimeout(() => {
      if (path.join("-") === "0-1-2") {
        setIsLoading(false);
        setSuccess(true);
        setDisabled(true);
      } else {
        setDisabled(true);
        setError(true);
        errorTimeout = setTimeout(() => {
          setDisabled(false);
          setError(false);
          setIsLoading(false);
          setPath([]);
        }, 2000);
      }
    }, 1000);
  };

  return (
    <React.Fragment>
      <div className="center">
        <PatternLock
          size={size}
          onChange={onChange}
          path={path}
          error={error}
          onFinish={onFinish}
          connectorThickness={5}
          disabled={disabled || isLoading}
          success={success}
        />
      </div>
      <div className="output">Select the top 3 points starting from the left</div>
      <div className="output">Output: {path.join(", ")}</div>
      {success && (
        <button
          style={{ margin: "0 auto", display: "block" }}
          onClick={onReset}
        >
          Click here to reset
        </button>
      )}
      <div className="output">
        Press the up/down arrow keys to increase/decrease the size of the input
      </div>
    </React.Fragment>
  );
};

export default SubAdmin;
