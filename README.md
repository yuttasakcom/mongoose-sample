# Mongoose Manual

http://mongoosejs.com/

## Table of Contents

* [Introduction](#introduction)
* [Install](#install)
* [Connection](#connection)

## Introduction

```
elegant mongodb object modeling for node.js

Let's face it, writing MongoDB validation,
casting and business logic boilerplate is a drag.
That's why we wrote Mongoose.

Mongoose provides a straight-forward,
schema-based solution to model your application data.
It includes built-in type casting, validation,
query building, business logic hooks and more, out of the box.
```

## Install

```bash
$ yarn add mongoose or npm i -S mongoose
```

## Connection

```javascript
const mongoose = require('mongoose')

mongoose.connect('mongodb://localhost/users_test')
mongoose.connection
  .once('open', () => console.log('Good to go!'))
  .on('error', err => console.error(err))
```
