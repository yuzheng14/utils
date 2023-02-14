#!/bin/bash
npm config set registry "$(cat temp_registry.txt)"
rm -f temp_registry.txt