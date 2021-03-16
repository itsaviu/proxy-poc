EC2 Instance

### VNC Setup on Amazon ec2
https://www.macupdate.com/app/mac/60678/tigervnc
https://aws.amazon.com/premiumsupport/knowledge-center/ec2-linux-2-install-gui/

### VNS Setup on Amazon ubuntu
https://medium.com/@Arafat./graphical-user-interface-using-vnc-with-amazon-ec2-instances-549d9c0969c5
sudo apt-get install -y ubuntu-desktop gnome-panel gnome-settings-daemon metacity nautilus gnome-terminal xfce4 vnc4server
### Cert Update https://askubuntu.com/questions/73287/how-do-i-install-a-root-certificate

## Headless
charles -headless
- Add Access Control to */*, in proxy settings https://stackoverflow.com/questions/49117151/charles-proxy-ssl-ssl-proxying-not-enabled-for-this-host
- SSL Configuring
cp -s /home/ec2-user/.charles/ca/charles-proxy-ssl-proxying-certificate.cer /etc/pki/ca-trust/source/anchors/
sudo ln -s /home/ec2-user/.charles/ca/charles-proxy-ssl-proxying-certificate.pem /etc/pki/ca-trust/source/anchors/charles-proxy-ssl-proxying-certificate.pem
update-ca-trust


https://www.uninstallmacapp.com/charles-3-9-2-removal.html

### Remove Charles
```
    ~/Library/Preferences/
    ~/Library/Application Support/
    ~/Library/Caches/ 
```

https://medium.com/@Arafat./graphical-user-interface-using-vnc-with-amazon-ec2-instances-549d9c0969c5
sudo apt-get install -y ubuntu-desktop gnome-panel gnome-settings-daemon metacity nautilus gnome-terminal xfce4 vnc4server