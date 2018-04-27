# Pi Sound Button (With Voice Kit)

Simple NodeJS program to playsound when you press the to button of the AYI Voice Kit.

## Requirement

- AIY Voice Kit
- NodeJS

## Installation

```
# Install NodeJS
wget -O - https://raw.githubusercontent.com/audstanley/NodeJs-Raspberry-Pi/master/Install-Node.sh | sudo bash

# Download the source code
git clone https://github.com/c4software/pi-sound-button.git

# Install Pi Sound Button dependencies.
cd pi-sound-button
npm install
```

## Enable the AIY Hat

```
vim /boot/config.txt

# Add at the end
dtoverlay=i2s-mmap
dtoverlay=googlevoicehat-soundcard
```

## Make the AIY Hat soundcard the default card.

```
vim ~/.asound

# Add 
pcm.!default {
 type hw
 card 1
 device 0
}

```

## Run the program

- reboot
- ```node main.js``` 
- Press the button
- Profit !
