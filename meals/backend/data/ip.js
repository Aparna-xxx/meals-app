// const os = require('os');

// function getLocalIPAddress() {
//     const interfaces = os.networkInterfaces();
//     for (let interfaceName in interfaces) {
//         const addresses = interfaces[interfaceName];
//         for (let i = 0; i < addresses.length; i++) {
//             const address = addresses[i];
//             if (address.family === 'IPv4' && !address.internal) {
//                 return address.address;
//             }
//         }
//     }
// }

// module.exports = getLocalIPAddress;
// ip.js
// ip.js
import * as Network from 'expo-network';

export const getLocalIPAddress = async () => {
    try {
        const ipAddress = await Network.getIpAddressAsync();
        return ipAddress;
    } catch (error) {
        console.error("Error getting IP address:", error);
        return null;
    }
};


