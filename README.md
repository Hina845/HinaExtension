# Hina Extension - HEX

- Version: 1.0.1-alpha
- Author: Hina Shii
- Buy Hina a lambo: Mexc UID: 84504541

**Note**: This application is in developing and likely contains bugs. Please contract Hina for any bugs during experience. Also, if you wish to add some feature, contract Hina too! Hina will very appreciate~~

## Overview:
This is how the extension look like...
![enter image description here](https://i.imgur.com/a02bVCx.png)
![enter image description here](https://i.imgur.com/JkYeur2.png)

You can drag and drop the extension using **⋮⋮** icon, or resize it as how you like, but it can't be too small. or too big...!
[enter image description here](https://imgur.com/zPhbw9f.png)

## Features
- Toolbar (From left to right):
	![enter image description here](https://imgur.com/Pl9OSlg.png)
	- ⋮⋮ : Hold this to drag and drop extension anywhere you like
	-  **Manual Order button**:
		![enter image description here](https://imgur.com/PbRzIA0.png)
		- You can type in **Symbol**, **Entry Price**, **Stoploss Price**, and **Takeprofit Price**. Then using **SC01** and **SC02** to place an order instantly, if the stoploss kill your position, you will loss *(approximately)* what you typed in **Risk Input** 
		- You can switch to **R** mode by clicking the button. In this mode, your TP will be placed based on *(SL price - Entry price)\*value*. *(For example, if you type '2' in TP field and **R** mode is on, when your position take profit, you will earn 2x which you loss when SL)*.
	- **Risk Input**
		- You can type amount of money (USDT) you *~~don't~~* want to loss here, Hina called it a **Risk**
		- **=**: This button will automatically  set a **Risk** for you, based on **Risk Formula**, which can be edit in the **Setting**.
	- **SC01**
		- This button will instantly place an order based on **Risk**, **Entry Price** and **Stoploss Price**, which can be determine in following priority: **Manual Order** -> **Fibonacci Retracement** -> **Long/Short Position**
			- Manual Order: When Manual Order tab is opening, this button will place order based on value of it.
			- Fibonacci Retracement: Double click to any Fibonacci Retracement in the chart, and swith to *Coordinate* tab, this button will place order based on value of it. You can modify the fibo order in the **Setting**
   			- ![enter image description here](https://imgur.com/OvwYsUB.png)
			- Long/Short Position: Double click to any Long Position or Short Position in the chart and switch to *Inputs* tab, this button will place order based on value of it
   			- ![enter image description here](https://imgur.com/pwFCDwZ.png)
	- **SC02**:
		- Place two **SC01** orders, the first one is the same as **SC01** but the second will place *reverse* order. The Entry price of the second order is the Stoploss price of the first order, and the Stoploss price of 2nd is the Entry price of 1st. If the 1st one is Long, then the 2nd one will be Short. Don't worry,  the Takeprofit price will be adjusted too!
	- **Mini Chart Button**
		- Open **Mini Chart** layout!
	- **Signal Notifier Button**
		- Open **Signal Notifier** layout!
	- **Setting Button**
		- Open **Setting**
	- **Hide Button**
		- Hide the extension. You can open the extension again by clicking the button on the bottom-right.
- **Mini Chart (from left to right)**
	- ![enter image description here](https://imgur.com/XHVLzi1.png)
	- **Indicator Button (fx)**: open a popup for Indicator Setting
 	- ![enter image description here](https://imgur.com/JSohcMY.png)
		- At this time, only 2 indicators is available: RSI and EMA. You can turn on or off them by clicking **RSI** or **EMA** button
	- **Symbol Search Bar**
		- Insert a symbol to this field, the candlestick chart of that symbol will be shown on canvas (data get from mexc.com)
		- You can favourite the symbol by click the star button, which will be useful in **Signal Notifier**
	- **Chart editor**
		- You can change size of the chart by using + or - button. And change the timeframe with the middle button
- **Signal Notifier**
	- Get the real-time signal in here. Don't miss any position from now! *(Caution: The signal maybe not right due to lack of real data. Please double check and use at your own risk!)*
	- The default TP of all signal is 2R and can't be changed at this time. Hina sorry for inconvenient~
	- ![enter image description here](https://imgur.com/gmse9za.png)
	- 	Current version support 3 type of signal: SC01, SC02 and SC02+FRVP
		- **SC01**
			- Based on RSI(14) to give signal. With *Long* signal, draw (from left to right) Fibonacci Retracement from the highest wick where the RSI(14) >= 70, to the lowest wick where RSI(14) <= 30. The Entry price is the value at 0.236 and the Stoploss Price is the value at 0 of the Fibonacci Retracement. 'Short' is the same but reverse!
		-	**SC02**
			-	Based on EMA(200) to give signal. With *Long* Position, when current trend is "Uptrend" (considered by percentage of number of candle above EMA200 in last 120 candle. If the percentage is > 66%, it considered "Uptrend"). Draw Fibonacci Retracement from the highest wick to present that the price at level 0.236 of Fibonacci Retracement is equal to price at current EMA(200). The Entry price is the value at 0.236 and the Stoploss Price is the value at 0 of the Fibonacci Retracement. 'Short' is the same but reverse!
		-	**SC02+FRVP**
			-	Same as SC02 but this signal used Fixed Range Volume Profile to find better Entry!.
	- **Signal Notifier Features:** 
		- **Filter Button**
			- Open the signal filter popup
			- ![enter image description here](https://imgur.com/1spFcPE.png)
				- **Imminnent**: If the current price is close to entry price, the **Imminence** will raise up. **5** mean almost entry!.
				- **Ratio (%)**: Ratio of the signal, calculate by Entry Price / Stoploss Price
				- **Favourite Only**: Only show favourited signal
		-	**Signal Filter**
			-	When clicked on **Signal** text at toolbar, it will filter to show only one type of signal
		-	**Position Filter**
			-	When clicked on **Position** text at toolbar, it will filter to show only one type of position
		- **Signal**
			- **Imminence**: The darker the color, the closer to the entry
			- **Favourite Button**: Add signal to favourite
			- **Hover**: Hover to the signal expose all information of that signal
			- **Chart Button**: Open this signal to **Mini Chart**
			- **Add Button**: Add this signal to **Manual Order**
			- **Border Color**:
				- Yellow: This order was triggered, value will be fixed.
      				- Cyan: This order is waiting, value of signal can be changed based on market.
- **Setting**
	-  Read In-app for the information. Hina too laze to re-write here...
 	- ![enter image description here](https://imgur.com/RgvZTpe.png)
