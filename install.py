from launch import is_installed, run_pip

if not is_installed("ollama"):
    run_pip("install ollama>=0.6.1")
