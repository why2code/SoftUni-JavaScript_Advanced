function modifyWorker(worker){
    if(worker["dizziness"] === true){
        let newHydratedLevel = 0.1 * worker.weight * worker.experience;
        worker.levelOfHydrated += newHydratedLevel;
        worker.dizziness = false;
    }

    return worker;
}

modifyWorker({ weight: 80,
    experience: 1,
    levelOfHydrated: 0,
    dizziness: true }
  );

modifyWorker({ weight: 120,
    experience: 20,
    levelOfHydrated: 200,
    dizziness: true }
  );