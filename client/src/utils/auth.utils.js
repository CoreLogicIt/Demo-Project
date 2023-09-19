const handleView = (navigate,view) => {
    if (!view) return;

    view === "login"
      ? navigate("/authentication/login")
      : navigate("/authentication/signup");
  };


  export {
    handleView
  }