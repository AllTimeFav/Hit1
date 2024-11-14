import React from "react";
import { useForm } from "react-hook-form";

const ReactForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    alert("Form Data: " + JSON.stringify(data));
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="w-full max-w-md bg-white rounded-lg shadow-md p-8">
        <h2 className="text-2xl font-semibold text-gray-700 mb-6">Register</h2>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-gray-600">First Name</label>
              <input
                type="text"
                {...register("firstName", {
                  required: "First name is required",
                  pattern: {
                    value: /^[A-Za-z]+$/,
                    message: "First name must contain only letters",
                  },
                })}
                className="w-full mt-1 p-2 border rounded-md"
              />
              {errors.firstName && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.firstName.message}
                </p>
              )}
            </div>

            <div>
              <label className="block text-gray-600">Second Name</label>
              <input
                type="text"
                {...register("secondName", {
                  required: "Second name is required",
                  pattern: {
                    value: /^[A-Za-z]+$/,
                    message: "Second name must contain only letters",
                  },
                })}
                className="w-full mt-1 p-2 border rounded-md"
              />
              {errors.secondName && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.secondName.message}
                </p>
              )}
            </div>
          </div>
          <div>
            <label className="block text-gray-600">Username</label>
            <input
              type="text"
              {...register("username", {
                required: "Username is required",
                pattern: {
                  value: /^[A-Za-z0-9_@./#&+-]+$/,
                  message:
                    "Username must contain letters and special characters",
                },
              })}
              className="w-full mt-1 p-2 border rounded-md"
            />
            {errors.username && (
              <p className="text-red-500 text-sm mt-1">
                {errors.username.message}
              </p>
            )}
          </div>

          <div>
            <label className="block text-gray-600">Email</label>
            <input
              type="email"
              {...register("email", {
                required: "Email is required",
                pattern: {
                  value: /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/,
                  message: "Invalid email format",
                },
              })}
              className="w-full mt-1 p-2 border rounded-md"
            />
            {errors.email && (
              <p className="text-red-500 text-sm mt-1">
                {errors.email.message}
              </p>
            )}
          </div>

          <div>
            <label className="block text-gray-600">Password</label>
            <input
              type="password"
              {...register("password", {
                required: "Password is required",
                pattern: {
                  value:
                    /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/,
                  message:
                    "Password must include letters, numbers, and special characters",
                },
              })}
              className="w-full mt-1 p-2 border rounded-md"
            />
            {errors.password && (
              <p className="text-red-500 text-sm mt-1">
                {errors.password.message}
              </p>
            )}
          </div>

          <div>
            <label className="block text-gray-600">Phone Number</label>
            <input
              type="text"
              {...register("phoneNumber", {
                required: "Phone number is required",
                pattern: {
                  value: /^\+92\d{3}\d{7}$/,
                  message:
                    "Phone number must follow Pakistani format +92xxxxxxxxxx",
                },
              })}
              className="w-full mt-1 p-2 border rounded-md"
            />
            {errors.phoneNumber && (
              <p className="text-red-500 text-sm mt-1">
                {errors.phoneNumber.message}
              </p>
            )}
          </div>

          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600"
          >
            Register
          </button>
        </form>
      </div>
    </div>
  );
};

export default ReactForm;
