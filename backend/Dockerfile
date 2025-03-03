# ✅ Bun の公式イメージを使用
FROM oven/bun:1.2.4-slim

# ✅ 作業ディレクトリを設定
WORKDIR /app

# ✅ パッケージファイルをコピーして依存関係をインストール
COPY package.json bun.lock ./
RUN bun install --frozen-lockfile

# ✅ ソースコードをコピー
COPY . .

# ✅ 環境変数を設定（PORT=8080 を Fly.io に合わせる）
ENV PORT=8080
EXPOSE 8080

# ✅ Bun のパスを明示的に指定（エラー回避のため）
ENV PATH="/usr/local/bin:/root/.bun/bin:$PATH"

# ✅ アプリを `package.json` の `start` スクリプトで起動
CMD ["bun", "start"]
