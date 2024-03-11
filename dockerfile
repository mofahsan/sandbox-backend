FROM node:16 
WORKDIR /app
COPY package.json .
COPY . . 
RUN npm install
EXPOSE 80
# RUN curl -s https://ngrok-agent.s3.amazonaws.com/ngrok.asc \
#   | sudo tee /etc/apt/trusted.gpg.d/ngrok.asc >/dev/null && echo "deb https://ngrok-agent.s3.amazonaws.com buster main" \
#   | sudo tee /etc/apt/sources.list.d/ngrok.list && sudo apt update && sudo apt install ngrok
# RUN ngrok config add-authtoken 2ShFpa3jrAfOkOh8N3x2GRvD0uG_s2Qc2FdSQBQRNHtm7QwK
# RUN ngrok http 80
CMD [ "npm", "run", "start-dev-mob"]