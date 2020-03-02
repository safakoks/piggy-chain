# Piggy Bank
![Piggy Bank](src/piggy.png?raw=true "Title")

A basic piggy bank example on Ethereum by using Truffle Suite and Solidity 0.6.0
## Road Map
 - [x] Basic Contract
 - [x] Test Contract
 - [ ] React Web Interface with Drizzle
 - [ ] Blockchain Network Creation



## Requirements

> Truffle v5.1.13 >
>
For checking version ```truffle version```

> Node v8.17.0
>
For checking version ```node -v```

> For real blockchain network test, RPC with running node on `localhost:8546`
>
RPC URL can be changed in `truffle-config.js`

## Getting Start
Installing node modules fo React
```bash
cd client
npm install
```
## Testing

Installing Truffle
```
npm install -g truffle;
```
For local test without blockchain network, it uses develop config in truffle-config.js

```
truffle develop;
```

Inside truffle(develop)
```
test;
```
### Real Network Test

For local test, it uses deployment network config in truffle-config.js

```Note : You should have +2 accounts on network.```

```
truffle migrate;
truffle test;
```

For remote test, it uses remote network config in truffle-config.json

```
truffle migrate --network remote;
truffle test --network remote;
```



# License
Copyright 2020 - Şafak Öksüzer, Berkay Korkmaz

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

   http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.