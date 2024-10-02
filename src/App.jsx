import { useState, useEffect } from "react";
import logo from "./assets/OikusDat logo_Alternate Landscape.png";

function App() {
  const [inputValue, setInputValue] = useState(""); // Input field value
  const [targetText, setTargetText] = useState(" "); // Text to be typed after backspace
  const [isDeleting, setIsDeleting] = useState(false);
  const [index, setIndex] = useState(0);
  const [userHasClicked, setUserHasClicked] = useState(false);
  const [isValidEmail, setIsValidEmail] = useState(true); // Tracks email validity
  const [emailSubmitted, setEmailSubmitted] = useState(false); // Tracks if email was successfully submitted

  const newText = "Thanks! We Will Notify You When OikusDat Is Released.";
  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/; // Email regex pattern

  const handleInputChange = (e) => {
    const value = e.target.value;
    setInputValue(value); // Update the input value
    setEmailSubmitted(false); // Reset email submission status when typing

    // Validate email format
    if (emailRegex.test(value) || value === "") {
      setIsValidEmail(true); // Set to true if the email is valid
    } else {
      setIsValidEmail(false); // Set to false if the email is invalid
    }
  };

  const sendEmailToServer = async (email) => {
    try {
      const response = await fetch(
        "https://search-feature-eight.vercel.app/add_email/",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ email }), // Send the email in the body
        }
      );

      if (response.ok) {
        console.log("Email successfully sent to the server");
      } else {
        console.error("Error sending email to the server");
      }
    } catch (error) {
      console.error("Network error:", error);
    }
  };

  const handleNotifyMe = () => {
    if (inputValue.length > 0 && isValidEmail) {
      setIsDeleting(true); // Start backspacing the user's input value
      setUserHasClicked(true); // Prevent further input while animation is running
      setEmailSubmitted(true); // Set email as submitted successfully
      sendEmailToServer(inputValue); // Send the email to the server
    } else {
      alert("Please enter a valid email address"); // Show an alert if the email is invalid
    }
  };

  useEffect(() => {
    if (isDeleting && inputValue.length > 0) {
      // Backspace the user's typed characters
      const timeout = setTimeout(() => {
        setInputValue((prev) => prev.slice(0, -1)); // Remove one character at a time
      }, 100); // Adjust backspace speed

      return () => clearTimeout(timeout);
    } else if (isDeleting && inputValue.length === 0) {
      // Once backspacing is done, start typing the new text
      setIsDeleting(false);
      setTargetText(newText); // Set the new target text to type
      setIndex(0); // Reset index for new text typing
    }
  }, [isDeleting, inputValue]);

  useEffect(() => {
    if (!isDeleting && targetText.length > index && userHasClicked) {
      const timeout = setTimeout(() => {
        setInputValue((prev) => prev + targetText.charAt(index)); // Add one character at a time
        setIndex((prev) => prev + 1); // Move to next character
      }, 150); // Adjust typing speed

      return () => clearTimeout(timeout);
    }
  }, [targetText, index, isDeleting, userHasClicked]);

  return (
    <div className="flex flex-col justify-center items-center bg-[url('./assets/Background.png')] bg-cover bg-no-repeat absolute inset-0 font-[Polysans_Neutral] text-white">
      <nav className="absolute top-0 left-0">
        <img src={logo} alt="OikusDat Logo" className="ml-3 w-32 md:w-48" />
      </nav>
      <div className=" absolute bottom-[190px]  lg:bottom-[160px]   flex flex-col justify-center items-center self-center">
        <h1 className="text-[27px] w-[370px] md:w-fit flex font-bold text-white font-['Polysans'] sm:text-[40px] md:text-[50px] lg:text-[60px]">
          OikusDat is Coming Soon...
        </h1>
        <div className="font-['Lato'] mt-[20px] lg:mt-[40px]">
          {/* Show different messages based on email submission status */}
          {!emailSubmitted ? (
            <p className="mb-[13px] font-medium text-[13px] sm:text-[15px] ">
              Enter your email and get notified when we launch!
            </p>
          ) : (
            <p className="mb-[13px] font-medium text-[13px] sm:text-[15px] ">
              We've received your email! 👍🏽{" "}
            </p>
          )}

          {/* Email input field */}
          <input
            type="email"
            className={` active:border-white focus:border-white px-4 text-[12px] md:text-[18px] outline-none w-[300px] md:w-[530px]  h-[50px] md:h-[60px] bg-transparent rounded-full  placeholder:text-white border ${
              isValidEmail ? "border-gray-600" : "border-red-800"
            }`}
            value={inputValue}
            onChange={handleInputChange}
            placeholder=" "
            required
          />
        </div>

        {/* Notify Me button */}
        {!emailSubmitted ? (
          <input
            type="submit"
            onClick={handleNotifyMe}
            className=" mt-10 bg-[#2C3E50] text-white w-[137px] md:w-[177px] h-[50px] md:h-[60px] text-[14px] md:text-[20px]  rounded-full hover:bg-[#34495E] transition duration-300 ease-in-out"
            value="Notify Me"
          />
        ) : (
          <input
            type="submit"
            className=" mt-10 bg-transparent text-white w-[137px] md:w-[177px] h-[50px] md:h-[60px] text-[14px] md:text-[20px]  rounded-full transition duration-300 ease-in-out cursor-default disabled:opacity-50"
            value=" "
            disabled
          />
        )}
      </div>
    </div>
  );
}

export default App;
