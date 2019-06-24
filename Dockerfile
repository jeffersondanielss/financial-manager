FROM node:10

ENV LC_ALL=C.UTF-8 \
    LANG=en_US.UTF-8 \
    LANGUAGE=en_US.UTF-8 \
    TZ=America/Sao_Paulo

WORKDIR /app

USER node

ENTRYPOINT ["/app/entrypoint.sh"]

EXPOSE 5000

CMD ["npm", "run", "server"]
