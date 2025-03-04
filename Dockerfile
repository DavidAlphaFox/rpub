FROM clojure:temurin-21-tools-deps-1.12.0.1479-bookworm-slim@sha256:15ca1c5c74b3c2236cee735f71d39fa0f0321588d5812c2e18391fbce74c2f20 AS builder
WORKDIR /app

## Cache Clojure Deps
RUN clojure -Sdeps '{:deps {dev.rpub/rpub {:mvn/version "0.0.1-SNAPSHOT"}}}' -P

## Install Babashka
RUN apt-get update && apt-get install -y curl
ADD https://raw.githubusercontent.com/babashka/babashka/master/install /app/install
RUN chmod +x install && ./install

## Cache Babashka Deps
RUN bb -Sdeps '{:deps {dev.rpub/rpub {:mvn/version "0.0.1-SNAPSHOT"}}}' prepare

FROM clojure:temurin-21-tools-deps-1.12.0.1479-bookworm-slim@sha256:15ca1c5c74b3c2236cee735f71d39fa0f0321588d5812c2e18391fbce74c2f20
WORKDIR /app

COPY --from=builder /root/.m2 /root/.m2
COPY --from=builder /root/.clojure /root/.clojure
COPY --from=builder /usr/local/bin/bb /usr/local/bin/bb
COPY --from=builder /root/.deps.clj /root/.deps.clj

# Run Uberjar
ENTRYPOINT [ \
  "bb", "-Sdeps", "{:deps {dev.rpub/rpub {:mvn/version \"0.0.1-SNAPSHOT\"}}}", \
  "-m", "rpub.tasks/supervisor", \
  "--mvn/version", "0.0.1-SNAPSHOT" \
]
