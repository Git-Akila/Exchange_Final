import React, { useState } from "react";

const PermissionforSubAdminAdd = ({ permissions, setPermissions }) => {
  // Initial permissions state

  // Handle change for main module permissions
  const handleModuleChange = (moduleIndex, type) => {
    console.log("Main module changed logged", { moduleIndex, type });
    setPermissions((prevPermissions) =>
      prevPermissions.map((module, index) =>
        index === moduleIndex ? { ...module, [type]: !module[type] } : module
      )
    );
  };

  // Handle change for submodule permissions
  const handleSubmoduleChange = (moduleIndex, submoduleIndex, type) => {
    console.log("Submodule change logged", {
      moduleIndex,
      submoduleIndex,
      type,
    });
    setPermissions((prevPermissions) =>
      prevPermissions.map((module, index) =>
        index === moduleIndex
          ? {
              ...module,
              submodule: module?.submodule.map((sub, subIndex) =>
                subIndex === submoduleIndex
                  ? { ...sub, [type]: !sub[type] }
                  : sub
              ),
            }
          : module
      )
    );
  };

  return (
    <form className="flex flex-col gap-4 p-6">
      <h2 className="font-bold text-xl  text-blue-900">Permissions</h2>
      {permissions?.map((module, moduleIndex) => (
        <div key={module?.module} className="flex flex-col py-2 ">
          <div className="flex">
            <div className="md:w-[20%] w-full">
              <h3>{module.module_name}</h3>
            </div>

            <div className="flex gap-1">
              <label>Read</label>
              <input
                className="cursor-pointer"
                type="checkbox"
                checked={module.read || false}
                onChange={() => handleModuleChange(moduleIndex, "read")}
              />
              <label>Write</label>
              <input
                className="cursor-pointer"
                type="checkbox"
                checked={module.write || false}
                onChange={() => handleModuleChange(moduleIndex, "write")}
              />
            </div>
          </div>
          {module?.submodule?.length > 0 && (
            <div className="pl-6 pt-4">
              {module?.submodule.map((sub, submoduleIndex) => (
                <div key={sub?.submodule} className="flex gap-4 py-2">
                  <div className="md:w-[17%] w-full ">
                    <h4>{sub.submodule_name}</h4>
                  </div>
                  <div className="flex gap-1">
                    <label>Read</label>
                    <input
                      className="cursor-pointer"
                      type="checkbox"
                      checked={sub.read || false}
                      onChange={() =>
                        handleSubmoduleChange(
                          moduleIndex,
                          submoduleIndex,
                          "read"
                        )
                      }
                    />
                    <label>Write</label>
                    <input
                      className="cursor-pointer"
                      type="checkbox"
                      checked={sub.write || false}
                      onChange={() =>
                        handleSubmoduleChange(
                          moduleIndex,
                          submoduleIndex,
                          "write"
                        )
                      }
                    />
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      ))}
    </form>
  );
};

export default PermissionforSubAdminAdd;
