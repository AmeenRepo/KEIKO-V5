FROM node:20

RUN apt-get update && \
    apt-get install -y \
    ffmpeg \
    imagemagick \
    webp && \
    apt-get upgrade -y && \
    rm -rf /var/lib/apt/lists/*

RUN git clone https://github.com/CalciFer-Howl/KEIKO-V7.git /ninja
WORKDIR /ninja
RUN yarn install
CMD ["npm", "start"]

