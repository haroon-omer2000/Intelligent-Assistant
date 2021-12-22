from simplet5 import SimpleT5
model = SimpleT5()

model.load_model(
    "t5", "./model_2_path/", use_gpu=False)

print(model.predict("Haroon and talal are studying."))
