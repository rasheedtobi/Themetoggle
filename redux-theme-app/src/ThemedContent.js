// import React from 'react';
// import { connect } from 'react-redux';
// import { setTheme } from './actions';

// const ThemedContent = ({ theme, setLightTheme, setDarkTheme }) => {
//   const toggleTheme = () => {
//     if (theme === 'light') {
//       setDarkTheme();
//     } else {
//       setLightTheme();
//     }
//   };

//   return (
//     <div style={{ background: theme === 'light' ? '#fff' : '#333', color: theme === 'light' ? '#333' : '#fff' }}>
//       <h1>{theme === 'light' ? 'Light Theme' : 'Dark Theme'}</h1>
//       <button onClick={toggleTheme}>Toggle Theme</button>
//       {/* Add your themed content here */}
//     </div>
//   );
// };

// const mapStateToProps = (state) => {
//   return {
//     theme: state.theme,
//   };
// };

// const mapDispatchToProps = (dispatch) => {
//   return {
//     setLightTheme: () => dispatch(setTheme('light')),
//     setDarkTheme: () => dispatch(setTheme('dark')),
//   };
// };

// export default connect(mapStateToProps, mapDispatchToProps)(ThemedContent);


import React from 'react';
import { connect } from 'react-redux';
import Switch from 'react-switch'; 
import { setTheme } from './actions'; 

const ThemedContent = ({ theme, setLightTheme, setDarkTheme }) => {
  const toggleTheme = () => {
    if (theme === 'light') {
      setDarkTheme();
    } else {
        setLightTheme();
    }
  };

  return (
    <div style={{ background: theme === 'light' ? '#fff' : '#333', color: theme === 'light' ? '#333' : '#fff' }}>
      <h1>{theme === 'light' ? 'Light Theme' : 'Dark Theme'}</h1>
      <label>
        <Switch
          onChange={toggleTheme}
          checked={theme === 'dark'}
          onColor="#86d3ff"
          onHandleColor="#2693e6"
          handleDiameter={30}
          uncheckedIcon={false}
          checkedIcon={false}
          height={20}
          width={48}
        />
        Enable Dark Theme
      </label>
      {/* Add themed content here */}
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    theme: state.theme,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    setLightTheme: () => dispatch(setTheme('light')),
    setDarkTheme: () => dispatch(setTheme('dark')),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ThemedContent);
