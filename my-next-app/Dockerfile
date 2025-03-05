# ✅ `node` イメージを使うことで `npm` を確実にインストール
FROM node:18-alpine AS builder

WORKDIR /app


# ✅ 必要なパッケージをインストール
RUN apk add --no-cache git bash

# ✅ package.json をコピーして依存関係をインストール
COPY package.json package-lock.json ./
WORKDIR /app/my-next-app
RUN npm install
RUN npm run build

# ✅ アプリのソースコードをコピー
COPY . .

# ✅ Next.js をビルド


# ✅ 実行環境を設定
FROM node:18-alpine AS runner
WORKDIR /app
COPY --from=builder /app /app

CMD ["npm", "run", "start"]
