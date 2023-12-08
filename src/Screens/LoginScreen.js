import React from "react";

export const LoginScreen = () => {
  React.useEffect(() => {
    // document.write(navigator.userAgent);
    const user_agent = navigator.userAgent;
    const user_agent_data_browser = navigator.userAgentData.brands[0];

    const user_device = [
      {
        mobile: navigator.userAgentData.mobile,
        platform: navigator.userAgentData.platform,
        isOnline: navigator.onLine,
        width: window.screen.width,
        height: window.screen.height,
      },
    ];
    const languages = navigator.languages;
    const user_public_ip = [];

    async function fetchIPAddress() {
      try {
        const response = await fetch("https://api.ipify.org?format=json");
        const data = await response.json();

        if (data) {
          // Pushing the fetched IP address into the user_public_ip array
          user_public_ip.push(data.ip);
        } else {
          console.log("No IP");
        }
      } catch (error) {
        console.error("Error:", error);
      }
    }

    fetchIPAddress();

    const data = [
      {
        Agent: user_agent,
        Agent_Data_Browser: user_agent_data_browser,
        Device: user_device[0],
        Language: languages,
        public_ip: user_public_ip,
      },
    ];

    const agentString = data[0].Agent;
    const startIndex = agentString.indexOf("(") + 1;
    const endIndex = agentString.indexOf(";");

    const deviceName = agentString.substring(startIndex, endIndex);

    setUserAgentDeviceData(deviceName);

    const agent_data = JSON.stringify(data);
    console.log(deviceName);
  }, []);
  return (
    <div className="container">
      <h1>LoginScreen</h1>
    </div>
  );
};
