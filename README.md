# Machine Learning Serving

Service Context Understanding with KFood DB

<img src="./flask1.gif" width="900px" height="506px"></img><br/>


---

## Install
1. Clone the Repo
```
git clone https://github.com/yunsujeon/MLserving_ServiceContextUnderstanding.git
```

2. Download model and **locate at app/output/**   
  [model_best.pth.tar](https://drive.google.com/file/d/123JNMX1n1LoxaTIuGy3K_9BYzfua6E7L/view?usp=sharing)   
  [faster_rcnn_1_7_9999.pth](https://drive.google.com/file/d/122ECul_6ByU2XrNUdSWlE7AB_zua--mf/view?usp=sharing)   
  [class_info_Kfood.pkl](https://drive.google.com/file/d/121GUhgUh4lsE_XhKneASHa3JXC5oBSvL/view?usp=sharing)   
  [class_info_FoodX251.pkl](https://drive.google.com/file/d/11ycaZIitI_ZK8dzvP0qaXKsoqosxOdAf/view?usp=sharing)   
  [class_info_Food101.pkl](https://drive.google.com/file/d/11srftNzO8Oxj1BwPhrvnYvDVE2ddPJCx/view?usp=sharing)   

## Running on Local machine with Anaconda

1. Anaconda create and activate
```
conda create -n <name> python==3.6.2
conda activate <name>
```

2. Install requirements
```
pip install -r requirements.txt
```
 
3. Run
```
python app.py
```
Go to http://0.0.0.0:8888 , then you can see wep page and explanation.


## Running on Docker

1. Install Docker your self

2. Create Docker image by build Dockerfile
```
sudo docker build -t <image name> .
or
docker build -t <image name> .
```

3. Run docker file
```
docker run -i -t --rm -p 8888:8888 -v <your path>:/<docker path> --shm-size=2GB --gpus all <image name>
ex)
docker run -i -t --rm -p 8888:8888 -v /home/intern/MLserving/app:/app --shm-size=2GB --gpus all <image name>

```
If you need more memory in docker env, and select specific gpus ..   
--shm-size=8G   
--gpus '"device=0,1"'   

Go to http://0.0.0.0:8888, then you can see wep page and explanation.

## Improvement

You can run this codes at SSH server, Its all same this repo's local, docker examples

**You have to match CUDA version to SSH server. So you have to change Dockerfile**

But you will change the access url   
0.0.0:8888 -> [your remote server ip]:8888

Enjoy this Repo. thank you.
