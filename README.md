# Hina Extension - HEX

- **Version**: 1.0.1-alpha  
- **Author**: Hina Shii  
- **Buy Hina a Lambo**: Mexc UID: 84504541  
- **Please do not publish this without Hina’s permission!**

**Note**: This application is under development and may contain bugs. Please contact Hina if you encounter any issues. Also, if you’d like to request a feature, contact Hina too! Hina will be very grateful~~

---

How to install:
  - In browser's extension setting, open developer mode
  - Click **Load Unpacked** and choose this folder
  - The folder should contains following files:
    - icons/
    - README.md (this)
    - manifest.json
    - popup.html
    - popup.js

---

## Overview

This is how the extension looks:

- ![enter image description here](https://i.imgur.com/a02bVCx.png)  
- ![enter image description here](https://i.imgur.com/JkYeur2.png)

You can drag and drop the extension using the **⋮⋮** icon or resize it however you like — but it can’t be too small... or too big.

![enter image description here](https://imgur.com/zPhbw9f.png)

---

## Features

### Toolbar (From left to right)

![enter image description here](https://imgur.com/Pl9OSlg.png)

- **⋮⋮**: Hold to drag and drop the extension anywhere.
- **Manual Order Button**  
  ![enter image description here](https://imgur.com/PbRzIA0.png)  
  - Enter **Symbol**, **Entry Price**, **Stoploss Price**, and **Takeprofit Price**.  
  - Use **SC01** or **SC02** to place an order. If Stoploss is hit, you lose approximately the amount set in **Risk Input**.
  - Toggle **R** mode to calculate TP as `(SL price - Entry price) × value`.  
    *Example: If you input `2` in the TP field with **R** mode on, your TP will be 2× your SL loss amount.*

- **Risk Input**  
  - Enter the amount of USDT you *don’t* want to lose — Hina calls this your **Risk**.  
  - **=** button will calculate **Risk** automatically using the **Risk Formula** in **Settings**.

- **SC01**  
  - Places an order using the following priority: **Manual Order** → **Fibonacci Retracement** → **Long/Short Position**.
    - **Manual Order**: Uses the input from the open Manual Order tab.
    - **Fibonacci Retracement**: Double-click a retracement on the chart, go to the *Coordinate* tab.  
      ![enter image description here](https://imgur.com/OvwYsUB.png)  
    - **Long/Short Position**: Double-click on the chart, go to the *Inputs* tab.  
      ![enter image description here](https://imgur.com/pwFCDwZ.png)

- **SC02**  
  - Places two **SC01** orders. The second order is a reverse:
    - Entry of 2nd = Stoploss of 1st  
    - Stoploss of 2nd = Entry of 1st  
    - Reverses position (Long ↔ Short)  
    - Adjusts TP accordingly

- **Mini Chart Button**  
  - Opens the **Mini Chart** layout.

- **Signal Notifier Button**  
  - Opens the **Signal Notifier** layout.

- **Settings Button**  
  - Opens **Settings**.

- **Hide Button**  
  - Hides the extension. Reopen via button at bottom-right.

---

### Mini Chart (From left to right)

![enter image description here](https://imgur.com/XHVLzi1.png)

- **Indicator Button (fx)**  
  Opens indicator settings popup  
  ![enter image description here](https://imgur.com/JSohcMY.png)  
  - Available indicators: **RSI** and **EMA** (toggle them with buttons)

- **Symbol Search Bar**  
  - Input a symbol to load its candlestick chart (data from mexc.com)  
  - Click star to favorite (used in **Signal Notifier**)

- **Chart Editor**  
  - Resize chart using +/− buttons  
  - Change timeframe with the middle button

---

### Signal Notifier

Real-time trading signals — don’t miss any entries!  
*Caution: Signals may be inaccurate due to limited data. Use at your own risk.*  
Default TP is 2R and cannot be changed at this time. Hina is sorry for the inconvenience~

![enter image description here](https://imgur.com/gmse9za.png)

#### Supported Signal Types

- **SC01**  
  - Based on **RSI(14)**  
  - *Long*: Draw Fibonacci Retracement from the highest wick (RSI ≥ 70) to the lowest (RSI ≤ 30)  
    - Entry: 0.236 level  
    - Stoploss: 0 level  
  - *Short*: Reverse of above

- **SC02**  
  - Based on **EMA(200)**  
  - *Long*: If 66%+ of last 120 candles are above EMA200 = “Uptrend”  
    - Draw Fibonacci Retracement from high to match 0.236 with EMA200  
    - Entry: 0.236  
    - Stoploss: 0  
  - *Short*: Reverse of above

- **SC02+FRVP**  
  - Same as SC02, but also uses **Fixed Range Volume Profile** for better entry

#### Signal Notifier Features

- **Filter Button**  
  Opens signal filter popup  
  ![enter image description here](https://imgur.com/1spFcPE.png)  
  - **Imminent**: Closeness to entry price (5 = nearly entered)  
  - **Ratio (%)**: Entry ÷ Stoploss  
  - **Favorite Only**: Show only starred signals

- **Signal Filter**  
  Click **Signal** in toolbar to filter by signal type

- **Position Filter**  
  Click **Position** in toolbar to filter by position type

- **Signal List**
  - **Imminence**: Darker = closer to entry  
  - **Favorite Button**: Star the signal  
  - **Hover**: Show full details  
  - **Chart Button**: Open in Mini Chart  
  - **Add Button**: Add to Manual Order  
  - **Border Colors**:
    - **Yellow**: Triggered — values fixed  
    - **Cyan**: Waiting — values may change

---

### Settings

Check the app for more info.  
Hina is too lazy to rewrite it here...

![enter image description here](https://imgur.com/RgvZTpe.png)
