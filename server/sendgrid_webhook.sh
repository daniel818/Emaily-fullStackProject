
function localtunnel {
  lt -p 5000 -s didiarari -o
}
until localtunnel; do
echo "localtunnel server crashed"
sleep 2
done