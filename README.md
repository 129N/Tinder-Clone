# Tinder Clone App 

A mobile app that replicates core Tinder functionality using **React Native (Expo)** and **Firebase**.  
スワイプ、チャットのUIを再現した Tinder風クローンアプリです。

---

##  Features / 機能

- Swipe Cards（スワイプによるマッチング）
- Real-time Match (マッチング後の通知)
- Firestore for data storage（ユーザーデータ、マッチデータをクラウド管理）

---

## Tech Stack / 技術スタック

- **React Native (Expo)**
- **React Navigation**
- **Firebase (Auth / Firestore / Storage)**
- **Tailwind CSS (via NativeWind)**

---

## Folder Structure / フォルダ構成（`/src`）

```bash
/src
├── components        # 再利用可能なUIコンポーネント
├── hooks             # カスタムフック（例: useAuth）
├── screens           # 各画面（HomeScreen, LoginScreen, ModalScreenなど）
├── navigation        # React Navigationの設定
├── lib               # Firebaseの初期化など
└── App.js            # アプリのエントリポイント
```

## Getting Started / セットアップ手順
1 Clone the repository / リポジトリをクローン
```bash
git clone https://github.com/129N/Tinder-Clone.git
cd Tinder-Clone
```

2 Install dependencies / 依存パッケージのインストール
```bash
npm install
```

3 Configure Firebase / Firebase設定
・lib/firebase.jsにあなたのFirebaseプロジェクトの設定を入力してください。

4 Start the development server / Expoを起動
```bash 
npx expo start
```

## Acknowledgements / クレジット
This app is inspired by Tinder UI/UX and built for educational purposes.
本アプリは学習目的で制作されたものであり、Tinder社とは関係ありません。
