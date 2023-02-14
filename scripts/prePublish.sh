#!/bin/bash
npm config get registry > temp_registry.txt
npm config set registry "https://registry.npmmirror.com/"
