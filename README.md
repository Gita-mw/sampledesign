# GitHub運用ルール

## 使用の流れ

### 1. メイン作業者がリポジトリを立ち上げ（プライベート）
- テンプレページコーディング完了時にプライベートリポジトリを立ち上げてアップ。
- ローカルでGit管理する。
- 共同作業者x3名までを招待。

※無料アカウントでは、非公開リポジトリの作業者は3名まで。

### 2. 共同作業者はmasterブランチからZipをダウンロード
- GitHubのmasterブランチからZipファイルをダウンロードする。
- ローカルでダウンロードしたデータを使用して作業をする。

### 3. チェック or 提出時、共同作業者が自分の作業用のブランチを作成
- チェック又は最終データ提出時に、新規ブランチを作成する。
- ブランチの名称はGitHubアカウントの先頭cooen-を除いたものとする。
- そのブランチに自分のローカル環境のデータを全てアップする。
- アップしたことをメイン作業者に報告する。
> ブランチの名称例： m-tajiwilliamson

### 4. メイン作業者がアップされた内容を確認
- メイン作業者は、 **3.** の報告を受けてプルし、内容を確認。
- OKの場合は **5.** へ。
- 修正のある場合は、[name]ブランチ上で修正する。
- 共同作業者が、作業の続きがある場合は、[name]ブランチのままプッシュ。
- 共同作業者に連絡し、[name]ブランチからZipをダウンロードしてもらい、作業続行。

### 5. メイン作業者がmasterブランチにマージ
- **4.** で共同作業者が、作業の続きがない場合は、masterブランチにマージして、プッシュ。[name]ブランチは削除。

### 6. メイン作業者が提出
- 全工程完成後、masterブランチからzipファイルをダウンロードし、提出。

---
## Git　コミットメッセージ　プレフィックス
- NEW:　新規ファイルを追加
- FIX:　バグ等の修正
- UPDATE:　ただたんにファイルの中身の更新・内容追加
- DELETE:　ファイルの削除、追跡の停止

> 例）NEW:　.gitignoreを新規作成  
> 例）FIX: メインイメージの表示くずれ修正  
> 例）UPDATE:　トップページのconcept〜servicesセクション追加しました。  
> 例）DELETE:　.scss全ファイルの追跡を停止。  
> 　　UPDATE:　.gitignoreに、.scssを追加。  

---
## .gitignoreの記述内容統一
※リポジトリ立ち上げる人が作成する。  
※他追加する内容あればご意見ください。

.DS_Store  
Thumbs.db  
.sass-cache/  
*.css.map  
