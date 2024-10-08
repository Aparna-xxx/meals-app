import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, Pressable, Dimensions, ActivityIndicator } from 'react-native';
import Colors from '../utils/Colors';
import { fetchWalletBalance } from '../backend/data/api'; // Import the function

const ScreenWidth = Dimensions.get('window').width;

function PSGWalletScreen() {
  const [walletBalance, setWalletBalance] = useState(null); // Use null to differentiate between loading and loaded states
  const [loading, setLoading] = useState(true); // Loading state
  const [error, setError] = useState(null); // Error state

  useEffect(() => {
    // Fetch wallet balance when the component mounts
    const loadBalance = async () => {
      try {
        const balance = await fetchWalletBalance();
        const numericBalance = Number(balance); // Type cast to number

        if (!isNaN(numericBalance)) {
          setWalletBalance(numericBalance);
        } else {
          throw new Error('Invalid balance value');
        }
      } catch (err) {
        setError('Failed to load balance');
      } finally {
        setLoading(false);
      }
    };

    loadBalance();
  }, []);

  const handleRecharge = () => {
    // Implement UPI recharge logic here
    console.log('Recharge via UPI');
  };

  if (loading) {
    return (
      <View style={styles.container}>
        <ActivityIndicator size="large" color={Colors.Black} />
      </View>
    );
  }

  if (error) {
    return (
      <View style={styles.container}>
        <Text style={styles.errorText}>{error}</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>PSG Wallet</Text>
      <Text style={styles.balanceText}>
        Current Balance: ₹{walletBalance !== null ? walletBalance.toFixed(2) : '0.00'}
      </Text>
      <Pressable style={styles.rechargeButton} onPress={handleRecharge}>
        <Text style={styles.rechargeButtonText}>Recharge via UPI</Text>
      </Pressable>
    </View>
  );
}

export default PSGWalletScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.WhiteBlue100,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  title: {
    fontFamily: 'Manrope_700Bold',
    fontSize: 24,
    color: 'black',
    marginBottom: 20,
  },
  balanceText: {
    fontFamily: 'Manrope_400Regular',
    fontSize: 18,
    color: 'black',
    marginBottom: 20,
  },
  rechargeButton: {
    backgroundColor: 'black',
    padding: 15,
    borderRadius: 5,
    width: ScreenWidth / 1.5,
    alignItems: 'center',
  },
  rechargeButtonText: {
    color: Colors.White700,
    fontFamily: 'Manrope_700Bold',
    fontSize: 16,
  },
  errorText: {
    color: 'red',
    fontFamily: 'Manrope_400Regular',
    fontSize: 16,
  },
});


